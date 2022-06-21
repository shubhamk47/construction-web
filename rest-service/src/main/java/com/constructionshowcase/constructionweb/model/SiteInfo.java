package com.constructionshowcase.constructionweb.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;
import lombok.NoArgsConstructor;

@Document
@Data
@NoArgsConstructor
public class SiteInfo {

    @Id
    private String id;
    private String siteName;
    private String templateId;
    private boolean activeFlag;
    private List<TextContent> textContents;
    private List<MediaContent> mediaContents;

}
