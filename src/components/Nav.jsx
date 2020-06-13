import React from 'react'
import { Num } from './Products'

export default function Nav() {
    return (
        <div class="row row-col-2 align-items-center">
            <div class="col">
            <p>{Num} Product(s) found</p>
            </div>
            <div class="col" style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', float: 'right'}}>
            <p style={{margin: "auto 0px"}}>Order by:</p>
        
            <div class="dropdown float-right">
                <button class="btn btn-default dropdown-toggle " type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                Select
                <span class="caret"></span>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                </ul>
            </div>
        
            </div>
        </div>
)
}
