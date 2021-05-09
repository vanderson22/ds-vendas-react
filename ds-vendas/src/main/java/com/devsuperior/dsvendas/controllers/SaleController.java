package com.devsuperior.dsvendas.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsvendas.dto.SaleDTO;
import com.devsuperior.dsvendas.service.SaleService;
import com.devsuperior.dsvendas.service.SellerService;

@RestController
@RequestMapping(value = "/sales")
public class SaleController {

	@Autowired
	private SaleService saleService;

	@Autowired
	private SellerService sellerService;

	@GetMapping
	@Transactional(readOnly = true)
	public ResponseEntity<Page<SaleDTO>> findAll(Pageable page) {
		sellerService.findAll(); // objetos em memoria
		Page<SaleDTO> list = saleService.findAll(page);
		return ResponseEntity.ok(list);
	}

}
