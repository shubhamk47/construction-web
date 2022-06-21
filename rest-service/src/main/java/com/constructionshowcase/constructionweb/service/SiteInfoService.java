package com.constructionshowcase.constructionweb.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.constructionshowcase.constructionweb.model.SiteInfo;
import com.constructionshowcase.constructionweb.repository.SiteInfoRepository;

@Service
public class SiteInfoService {

    @Autowired
    SiteInfoRepository siteInfoRepository;
    
    public Map<String, SiteInfo> saveSiteDetails(SiteInfo siteInfo){
        this.siteInfoRepository.save(siteInfo);
        return Map.of(siteInfo.getSiteName(), siteInfo);
    }

    public List<SiteInfo> getAllSiteDetails(){
        return this.siteInfoRepository.findAll();
    }

    public SiteInfo getSiteInfoDetails(String id) {
        return this.siteInfoRepository.findById(id).get();
    }

}
