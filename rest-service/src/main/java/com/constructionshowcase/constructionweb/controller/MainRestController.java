package com.constructionshowcase.constructionweb.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.constructionshowcase.constructionweb.model.SiteInfo;
import com.constructionshowcase.constructionweb.service.SiteInfoService;

@Controller
public class MainRestController {

    @Autowired
    SiteInfoService siteInfoService;
    
    @GetMapping(path = "/sites")
    public List<SiteInfo> getAllSiteDetails(){
        return this.siteInfoService.getAllSiteDetails();
    }

    @PostMapping(path = "/save")
    public Map<String, SiteInfo> saveSiteDetails(@RequestBody SiteInfo siteInfo){
        return this.siteInfoService.saveSiteDetails(siteInfo);
    }

}
