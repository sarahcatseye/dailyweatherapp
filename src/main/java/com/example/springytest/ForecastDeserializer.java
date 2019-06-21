package com.example.springytest;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;

import java.io.IOException;

public class ForecastDeserializer extends StdDeserializer<Forecast> {
    public ForecastDeserializer() {
        this(null);
    }

    public ForecastDeserializer(Class<?> vc) {
        super(vc);
    }
//    private String weatherState;
//    private String weatherStateIcon;
//    private float windSpeed;
//    private float windDirection;
//    private int temperature;
//    private float airPressure;
//    private float humidity;
//    private float visibility;
//    private int predictability;
    @Override
    public Forecast deserialize(JsonParser jp, DeserializationContext ctxt)
            throws IOException, JsonProcessingException {
        JsonNode node = jp.getCodec().readTree(jp);
        String weatherState = node.get("weather_state_name").asText();
        String weatherStateIcon = node.get("weather_state_abbr").asText();
        float windSpeed = (float) node.get("wind_speed").asDouble();
        float windDirection = (float) node.get("wind_direction").asDouble();
        int temperature = node.get("the_temp").asInt();
        float airPressure = (float) node.get("air_pressure").asDouble();
        float humidity = (float) node.get("humidity").asDouble();
        float visibility = (float) node.get("visibility").asDouble();
        int predictability = node.get("predictability").asInt();
        return new Forecast(weatherState,
                "https://www.metaweather.com/static/img/weather/" + weatherStateIcon + ".svg",
                windSpeed,
                windDirection,
                temperature,
                airPressure,
                humidity,
                visibility,
                predictability);
    }
}
