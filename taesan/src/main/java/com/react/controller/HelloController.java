package com.react.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by imcts on 2016. 4. 13..
 */

@Controller
public class HelloController {


    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String home() {

        System.out.println("진입을 합니다.");

        return "home";
    }

}
