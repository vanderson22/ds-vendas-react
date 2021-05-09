package com.devsuperior.dsvendas.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.devsuperior.dsvendas.dto.SaleDTO;
import com.devsuperior.dsvendas.entities.Sale;
import com.devsuperior.dsvendas.repositories.SaleRepository;

@Service
public class SaleService {

	@Autowired
	private SaleRepository sellerRepository;

	/**
	 * @return - List<Sale> retorna sellers.
	 **/
	public Page<SaleDTO> findAll(Pageable pageable) {

		Page<Sale> list = sellerRepository.findAll(pageable);
		return	list
				    .map( item -> new SaleDTO(item));
				     
	}
}
