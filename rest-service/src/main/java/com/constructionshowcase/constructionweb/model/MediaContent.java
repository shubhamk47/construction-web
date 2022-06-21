package com.constructionshowcase.constructionweb.model;

import org.bson.types.Binary;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class MediaContent {

    private String containerName;
    private Binary image;

}
