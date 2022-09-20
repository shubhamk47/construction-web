package com.constructionshowcase.constructionweb.service;

import java.lang.StackWalker.Option;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.constructionshowcase.constructionweb.dto.SiteInfoDto;
import com.constructionshowcase.constructionweb.mapper.SiteInfoMapper;
import com.constructionshowcase.constructionweb.model.SiteInfo;
import com.constructionshowcase.constructionweb.repository.SiteInfoRepository;

@Service
public class AdminService {

    @Autowired
    SiteInfoRepository siteInfoRepository;
    @Autowired
    SiteInfoMapper siteInfoMapper;

    public boolean updateSiteStatus(String id) {
        Optional<SiteInfo> site = this.siteInfoRepository.findById(id);
        if(site.isPresent()){
            site.get().setActiveFlag(!site.get().isActiveFlag());
            return true;
        }else{
            return false;
        }
    }

    public boolean updateSite(SiteInfoDto siteInfoDto) {
        try{
            Optional<SiteInfo> site = this.siteInfoRepository.findById(siteInfoDto.getId());
            if(site.isPresent()){
                this.siteInfoMapper.updateSiteInfoFromDto(siteInfoDto, site.get());
                return true;
            }else{
                return false;
            }
        }catch(Exception e){

        }
        return false;
    }

    public boolean deleteSite(String id) {
        this.siteInfoRepository.deleteById(id);
        return true;
    }
    
}
