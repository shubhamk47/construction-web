package com.constructionshowcase.constructionweb.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.constructionshowcase.constructionweb.dto.SiteInfoDto;
import com.constructionshowcase.constructionweb.model.SiteInfo;
import com.constructionshowcase.constructionweb.repository.SiteInfoRepository;
import com.constructionshowcase.constructionweb.service.AdminService;

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminController {

    @Autowired
    SiteInfoRepository siteInfoRepository;
    @Autowired
    AdminService adminService;

    @GetMapping("/get-sites")
    public List<SiteInfo> getAllSites() {
        return this.siteInfoRepository.findAll();
    }

    @PostMapping("/set-active")
    public ResponseEntity<String> updateSiteStatus(@RequestBody String id) {
        return this.adminService.updateSiteStatus(id) ? new ResponseEntity<>("site status updated!", HttpStatus.OK)
                : new ResponseEntity<>("update failed!", HttpStatus.BAD_REQUEST);
    }

    @PatchMapping("/update-site")
    public ResponseEntity<String> updateSite(@RequestBody SiteInfoDto SiteInfoDto) {
        return this.adminService.updateSite(SiteInfoDto) ? new ResponseEntity<>("site updated!", HttpStatus.OK)
                : new ResponseEntity<>("update failed!", HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping("/delete-site")
    public ResponseEntity<String> deleteSite(@RequestBody String id) {
        return this.adminService.deleteSite(id) ? new ResponseEntity<>("site deleted!", HttpStatus.OK)
                : new ResponseEntity<>("delete failed!", HttpStatus.BAD_REQUEST);
    }

}
