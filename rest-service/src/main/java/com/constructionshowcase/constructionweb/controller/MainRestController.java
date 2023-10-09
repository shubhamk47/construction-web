package com.constructionshowcase.constructionweb.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.constructionshowcase.constructionweb.model.SiteInfo;
import com.constructionshowcase.constructionweb.service.SiteInfoService;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class MainRestController {

    @Autowired
    SiteInfoService siteInfoService;

    @GetMapping(path = "/sites")
    public List<SiteInfo> getAllSiteDetails() {
        return this.siteInfoService.getAllSiteDetails();
    }

    @PostMapping(path = "/save")
    public Map<String, SiteInfo> saveSiteDetails(@RequestBody SiteInfo siteInfo) {
        return this.siteInfoService.saveSiteDetails(siteInfo);
    }

    @GetMapping(path = "/site/{id}")
    public SiteInfo getSiteInfoDetails(@PathVariable String id){
        return this.siteInfoService.getSiteInfoDetails(id);
    }

    @GetMapping(path = "/sites/{status}")
    public List<SiteInfo> getSitesByStatus(@PathVariable String status){
        return this.siteInfoService.getSitesByStatus(status);
    }

    @GetMapping(path = "/test")
    public String test(){
        return "Hello World";
    }

}
