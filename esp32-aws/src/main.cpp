#include <Arduino.h>
#include "WiFi.h"
#include "certs.h"
#include <WiFiClientSecure.h>
#include <MQTTClient.h>
#include <ArduinoJson.h>

#include <Adafruit_Sensor.h>
#include <DHT.h>
#include <DHT_U.h>

#define DEVICE_NAME "my-light"
#define AWS_IOT_ENDPOINT "a1m3srscrrd79b-ats.iot.ap-southeast-1.amazonaws.com"
#define AWS_IOT_TOPIC "$aws/things/" DEVICE_NAME "/shadow/update"
#define AWS_MAX_RECONNECT_TRIES 50
#define DHPIN 2
#define DHTTYPE DHT11

DHT_Unified dht(DHTPIN, DHTTYPE);
uint32_t delayMS;

const char *WIFI_SSID = "Parman-bedroom";
const char *WIFI_PASSWORD = "027293704";

WiFiClientSecure net = WiFiClientSecure();
MQTTClient client = MQTTClient(512);
unsigned long lastMillis = 0;

void messageReceived(String &topic, String &payload)
{
  Serial.println("incoming: " + topic + " - " + payload);
}

void connectToWiFi()
{
  WiFi.mode(WIFI_STA);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);

  int retries = 0;
  Serial.println("Connecting Wifi....");
  while (WiFi.status() != WL_CONNECTED && retries < 15)
  {
    delay(500);
    Serial.print(".");
    retries++;
  }

  if (WiFi.status() != WL_CONNECTED)
  {
    esp_sleep_enable_timer_wakeup(1 * 60L * 1000000L);
    esp_deep_sleep_start();
  }

  Serial.println(".");
}

void connectToAWS()
{
  net.setCACert(AWS_CERT_CA);
  net.setCertificate(AWS_CERT_CRT);
  net.setPrivateKey(AWS_CERT_PRIVATE);

  client.begin(AWS_IOT_ENDPOINT, 8883, net);
  client.onMessage(messageReceived);

  int retries = 0;
  Serial.println("Connecting to AWS IOT");

  while (!client.connect(DEVICE_NAME) && retries < AWS_MAX_RECONNECT_TRIES)
  {
    Serial.print(".");
    delay(100);
    retries++;
  }

  if (!client.connected())
  {
    Serial.println(" Timeout!");
    return;
  }

  Serial.println("Connected!");
  client.subscribe("hello");
}

void connectToSensor()
{
  dht.begin();
  Serial.println(F("DHTxx Unified Sensor Example"));
  // Print temperature sensor details.
  sensor_t sensor;
  dht.temperature().getSensor(&sensor);
  Serial.println(F("------------------------------------"));
  Serial.println(F("Temperature Sensor"));
  Serial.print(F("Sensor Type: "));
  Serial.println(sensor.name);
  Serial.print(F("Driver Ver:  "));
  Serial.println(sensor.version);
  Serial.print(F("Unique ID:   "));
  Serial.println(sensor.sensor_id);
  Serial.print(F("Max Value:   "));
  Serial.print(sensor.max_value);
  Serial.println(F("°C"));
  Serial.print(F("Min Value:   "));
  Serial.print(sensor.min_value);
  Serial.println(F("°C"));
  Serial.print(F("Resolution:  "));
  Serial.print(sensor.resolution);
  Serial.println(F("°C"));
  Serial.println(F("------------------------------------"));
  // Print humidity sensor details.
  dht.humidity().getSensor(&sensor);
  Serial.println(F("Humidity Sensor"));
  Serial.print(F("Sensor Type: "));
  Serial.println(sensor.name);
  Serial.print(F("Driver Ver:  "));
  Serial.println(sensor.version);
  Serial.print(F("Unique ID:   "));
  Serial.println(sensor.sensor_id);
  Serial.print(F("Max Value:   "));
  Serial.print(sensor.max_value);
  Serial.println(F("%"));
  Serial.print(F("Min Value:   "));
  Serial.print(sensor.min_value);
  Serial.println(F("%"));
  Serial.print(F("Resolution:  "));
  Serial.print(sensor.resolution);
  Serial.println(F("%"));
  Serial.println(F("------------------------------------"));
  // Set delay between sensor readings based on sensor details.
  delayMS = sensor.min_delay / 1000;
}

void sendJsonToAWS(void *pvParameters)
{
  while (1)
  {
    StaticJsonDocument<512> jsonDoc;
    JsonObject stateObj = jsonDoc.createNestedObject("state");
    JsonObject reportedObj = stateObj.createNestedObject("reported");

    reportedObj["temperature"] = 23.76;
    reportedObj["humidity"] = 78.12;
    reportedObj["wifi_strength"] = WiFi.RSSI();

    JsonObject locationObj = reportedObj.createNestedObject("location");
    locationObj["name"] = "Garden";

    char jsonBuffer[512];
    serializeJson(jsonDoc, jsonBuffer);
    serializeJson(jsonDoc, Serial);
    Serial.println("");
    client.publish(AWS_IOT_TOPIC, jsonBuffer);

    vTaskDelay(5000 / portTICK_PERIOD_MS);
  }
}

void readSensor()
{
  while (1)
  {
    vTaskDelay(delayMS / portTICK_PERIOD_MS);

    // Get temperature event and print its value.
    sensors_event_t event;
    dht.temperature().getEvent(&event);
    if (isnan(event.temperature))
    {
      Serial.println(F("Error reading temperature!"));
    }
    else
    {
      Serial.print(F("Temperature: "));
      Serial.print(event.temperature);
      Serial.println(F("°C"));
    }
    // Get humidity event and print its value.
    dht.humidity().getEvent(&event);
    if (isnan(event.relative_humidity))
    {
      Serial.println(F("Error reading humidity!"));
    }
    else
    {
      Serial.print(F("Humidity: "));
      Serial.print(event.relative_humidity);
      Serial.println(F("%"));
    }
  }
}

void setup()
{
  Serial.begin(9600);
  pinMode(LED_BUILTIN, OUTPUT);
  connectToWiFi();
  connectToAWS();
  connectToSensor();

  xTaskCreate(sendJsonToAWS, "sendJsonToAWS", 4096, NULL, 1, NULL);
  xTaskCreate(readSensor, "readSensor", 4096, NULL, 1, NULL);
}

void loop()
{
  digitalWrite(LED_BUILTIN, HIGH);
  delay(500);

  digitalWrite(LED_BUILTIN, LOW);
  delay(500);

  //sendJsonToAWS();
  client.loop();
  delay(1000);
}
