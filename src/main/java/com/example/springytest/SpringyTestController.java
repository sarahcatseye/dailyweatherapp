package com.example.springytest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.io.IOException;
import java.util.List;

@RestController
public class SpringyTestController {
    @Autowired
    private SpringyTestService service;

    @RequestMapping(method = RequestMethod.GET, value = "/locationSearch/location")
    public List<Location> getLocationSearchServiceThroughLocation(@RequestParam(value = "location", defaultValue = "atlanta") String location) throws IOException {
        return service.getLocationSearch(location);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/locationSearch/lattlong")
    public List<Location> getLocationSearchServiceThroughLattLong(@RequestParam(value = "latt", defaultValue = "36.96") String latt,
                                                          @RequestParam(value = "longi", defaultValue = "-122.02") String longi) throws IOException {
        return service.getLocationSearch(latt, longi);
    }

    @RequestMapping(method = RequestMethod.GET, value = "location")
    public String getLocationService(@RequestParam(value = "woeid", defaultValue = "2357024") String woeid) throws IOException {
        int intWoeid = Integer.parseInt(woeid);
        return service.getLocation(intWoeid);
    }
    @RequestMapping(method = RequestMethod.GET, value ="locationDate")
    public String getLocationDateService(@RequestParam(value = "woeid", defaultValue = "2357024") String woeid,
                                         @RequestParam(value = "year", defaultValue = "2019") String year,
                                         @RequestParam(value = "month", defaultValue = "4") String month,
                                         @RequestParam(value = "day", defaultValue = "19") String day) throws IOException {
        return service.getLocationDate(woeid, year, month, day);
    }

    @RequestMapping(method = RequestMethod.GET, value = "locationSearch/woeid")
    public Location getOneLocation(@RequestParam(value = "location", defaultValue = "2357024") String woeid) throws IOException {
        int intWoeid = Integer.parseInt(woeid);
        return service.getDetailedLocation(intWoeid);
    }
}
