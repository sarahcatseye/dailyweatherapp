package com.example.springytest;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import org.springframework.boot.json.JsonParseException;
import org.springframework.http.*;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

public class SpringyTestService {
    public List<Location> getLocationSearch(String location) throws IOException {
        String uri = "https://www.metaweather.com/api/location/search/?query=";
        String apiResult = HTTPrequest(uri + location);
        List<Location> locationList = deserializeToLocation(apiResult);
        for (Location result: locationList) {
            String weatherJson = getLocation(result.getWoeid());
            result.setForecast(deserializeToForecast(weatherJson));
        }
        return locationList;
        //return HTTPrequest(uri + location);
    }

    public List<Location> getLocationSearch(String latt, String longi) throws IOException {
        String uri = "https://www.metaweather.com/api/location/search/?lattlong=";
        String apiResult =  HTTPrequest(uri + latt + "," + longi);
        List<Location> locationList = deserializeToLocation(apiResult);
        for (Location result: locationList) {
            String weatherJson = getLocation(result.getWoeid());
            result.setForecast(deserializeToForecast(weatherJson));
        }
        return locationList;
    }

    public String getLocation(int woeid) throws IOException {
        String uri = "https://www.metaweather.com/api/location/";
        return HTTPrequest(uri + woeid);
    }

    public String getLocationDate(String woeid, String year, String month, String day) throws IOException {
        String uri = "https://www.metaweather.com/api/location/";
        return HTTPrequest(uri + woeid + "/" + year + "/" + month + "/" + day);
    }
    public Location getDetailedLocation(int woeid) throws IOException {
        String uri = "https://www.metaweather.com/api/location/";
        String json = HTTPrequest(uri + woeid);
        ObjectMapper mapper = new ObjectMapper();
        Location location = mapper.readValue(json, Location.class);
        location.setForecast(deserializeToForecast(json));
        return location;
    }

    public String HTTPrequest(String uri) throws IOException {

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response
                = restTemplate.getForEntity(uri, String.class);
        return response.getBody();
    }

    public List<Location> deserializeToLocation(String json) throws IOException, JsonParseException {
        ObjectMapper mapper = new ObjectMapper();
        List<Location> locationList = Arrays.asList(mapper.readValue(json, Location[].class));
        return locationList;
    }

    public Forecast deserializeToForecast(String json) throws IOException, JsonParseException {
        ObjectMapper mapper = new ObjectMapper();
        JsonNode node = mapper.readTree(json);
        ArrayNode consolidatedWeather = (ArrayNode) node.get("consolidated_weather");
        JsonNode forecastNode = consolidatedWeather.get(0);
        Forecast forecast = mapper.treeToValue(forecastNode, Forecast.class);
        return forecast;
    }
}
