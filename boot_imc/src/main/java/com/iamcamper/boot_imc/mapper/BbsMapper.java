package com.iamcamper.boot_imc.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.iamcamper.boot_imc.VO.BbsVO;

public interface BbsMapper {
    List<BbsVO> list(@Param("begin") String begin, @Param("end") String end, @Param("bname") String bname);

    List<BbsVO> blist(String bname);

    List<BbsVO> blist2(Map<String, String> map);

    BbsVO del(String b_idx);

    BbsVO view(String b_idx);

    void add(BbsVO vo);

    int totalCount(@Param("bname") String bname);

    int ViewCount(String b_idx);
}
