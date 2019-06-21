package com.example.springytest;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

@JsonDeserialize(using = ForecastDeserializer.class)
public class Forecast {
    private String weatherState;
    private String weatherStateIcon;
    private float windSpeed;
    private float windDirection;
    private int temperature;
    private float airPressure;
    private float humidity;
    private float visibility;
    private int predictability;

    public Forecast(String weatherState,
                    String weatherStateIcon,
                    float windSpeed,
                    float windDirection,
                    int temperature,
                    float airPressure,
                    float humidity,
                    float visibility,
                    int predictability) {
        this.weatherState = weatherState;
        this.weatherStateIcon = weatherStateIcon;
        this.windDirection = windDirection;
        this.temperature = temperature;
        this.airPressure = airPressure;
        this.humidity = humidity;
        this.visibility = visibility;
        this.predictability = predictability;
    }

    public String getWeatherState() {
        return weatherState;
    }

    public String getWeatherStateIcon() {
        return weatherStateIcon;
    }

    public float getWindSpeed() {
        return windSpeed;
    }

    public float getWindDirection() {
        return windDirection;
    }

    public int getTemperature() {
        return temperature;
    }

    public float getAirPressure() {
        return airPressure;
    }

    public float getHumidity() {
        return humidity;
    }

    public float getVisibility() {
        return visibility;
    }

    public int getPredictability() {
        return predictability;
    }
}
