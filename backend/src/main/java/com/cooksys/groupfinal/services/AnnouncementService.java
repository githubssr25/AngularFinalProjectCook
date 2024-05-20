package com.cooksys.groupfinal.services;

import com.cooksys.groupfinal.dtos.AnnouncementDto;
import com.cooksys.groupfinal.dtos.AnnouncementRequestDto;

public interface AnnouncementService {

    AnnouncementDto createAnnoucement(Long companyId, Long userId, AnnouncementRequestDto announcementRequestDto);
}
