package com.constructionshowcase.constructionweb.model;

import org.bson.types.Binary;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@ToString
public class MediaContent {

    private String containerName;
    private String image;

}
