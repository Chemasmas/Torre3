/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.nebulahelix.torre3.services;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;

import javax.ws.rs.Produces;

import javax.ws.rs.QueryParam;
import javax.ws.rs.PathParam;
import javax.ws.rs.FormParam;
        
import javax.ws.rs.core.MediaType;

/**
 *
 * @author Chemasmas
 */

@Path("/param")
public class TestParam {
    
    @GET
    @Path("/{param}")
    @Produces(MediaType.APPLICATION_JSON)
    public String testParam(@PathParam("param") String param)
    {
        return "{msg:"+param+"}";
    }
    
    @GET
    @Path("/usuario")
    @Produces(MediaType.APPLICATION_JSON)
    public String testQuery(@QueryParam("usr") String usr,
                            @QueryParam("hash") String hash)
    {
        return "{usr :'"+usr+"' , pwd: '"+hash+"' }";
    }
    
    /*
    Torre3/param/usuario
    */
    @POST
    @Path("/usuario")
    @Produces(MediaType.APPLICATION_JSON)
    public String Login(@FormParam("usr") String usr,
                        @FormParam("pwd") String pwd)
    {
        System.out.println("Alguien se Conecto con "+usr+" y "+pwd);
        return "{usr :'"+usr+"' , pwd: '"+pwd+"' }";
    }
}



















