package com.constructionshowcase.constructionweb.mapper;

import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValueCheckStrategy;
import org.mapstruct.NullValuePropertyMappingStrategy;

import com.constructionshowcase.constructionweb.dto.SiteInfoDto;
import com.constructionshowcase.constructionweb.model.SiteInfo;

@Mapper(componentModel = "spring")
public interface SiteInfoMapper {

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE, nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
    void updateSiteInfoFromDto(SiteInfoDto siteInfoDto, @MappingTarget SiteInfo siteInfo);
}
