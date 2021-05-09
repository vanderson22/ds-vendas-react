package com.devsuperior.dsvendas.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsvendas.dto.SaleDTO;
import com.devsuperior.dsvendas.dto.SalesSuccessDTO;
import com.devsuperior.dsvendas.dto.SalesSumDTO;
import com.devsuperior.dsvendas.entities.Sale;
import com.devsuperior.dsvendas.repositories.SaleRepository;

@Service
public class SaleService {

	@Autowired
	private SaleRepository saleRepository;

	@Autowired
	private SellerService sellerService;

	/**
	 * @return - List<Sale> retorna sellers.
	 **/
	@Transactional(readOnly = true)
	public Page<SaleDTO> findAll(Pageable pageable) {
		sellerService.findAll(); // objetos em memoria
		Page<Sale> list = saleRepository.findAll(pageable);
		return list.map(item -> new SaleDTO(item));

	}

	@Transactional(readOnly = true)
	public List<SalesSumDTO> amountGroupedBySeller() {

		return saleRepository.amountGroupedBySeller();

	}
	
	@Transactional(readOnly = true)
	public List<SalesSuccessDTO> successGroupedBySeller() {

		return saleRepository.successGroupedBySeller();

	}
}
