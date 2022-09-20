package com.constructionshowcase.constructionweb.dto;

import java.util.Map;

import lombok.Data;

@Data
public class SiteInfoDto {
    private String id;
    private String siteName;
    private String templateId;
    private boolean activeFlag;
    private boolean isComplete = false;
    private Map<String, String> textContents;
}
