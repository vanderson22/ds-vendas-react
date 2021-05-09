package com.devsuperior.dsvendas.dto;

import java.io.Serializable;

import com.devsuperior.dsvendas.entities.Seller;

public class SellerDTO implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private long id;
	private String name;

	public SellerDTO() {

	}

	public SellerDTO(long id, String name) {
		this.id = id;
		this.name = name;
	}

	// copiando atributos da entidade
	public SellerDTO(Seller seller) {
		id = seller.getId();
		name = seller.getName();
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
