package com.constructionshowcase.constructionweb.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.constructionshowcase.constructionweb.model.SiteInfo;

@Repository
public interface SiteInfoRepository extends MongoRepository<SiteInfo, String> {
    List<SiteInfo> findAllByIsCompleteTrue();
    List<SiteInfo> findAllByIsCompleteFalse();
}
