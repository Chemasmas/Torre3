/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.nebulahelix.torre3.services;

import javax.ws.rs.Path;
import javax.ws.rs.GET;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/**
 *
 * @author Chemasmas
 */
@Path("/prueba")
public class Test {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String holaMundo()
    {
        return "{msg:'Hola Mundo'}";
    }
}
