package com.devsuperior.dsvendas.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devsuperior.dsvendas.dto.SellerDTO;
import com.devsuperior.dsvendas.entities.Seller;
import com.devsuperior.dsvendas.repositories.SellerRepository;

@Service
public class SellerService {

	@Autowired
	private SellerRepository sellerRepository;

	/**
	 * @return - List<Seller> retorna sellers.
	 **/
	public List<SellerDTO> findAll() {

		List<Seller> list = sellerRepository.findAll();
		return	list.stream()
				    .map( item -> new SellerDTO(item))
				    .collect(Collectors.toList());
	}
}
