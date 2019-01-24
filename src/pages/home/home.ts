import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConfigProvider } from '../../providers/config/config';
import { HttpServicesProvider } from '../../providers/http-services/http-services';
import {Http,Jsonp} from "@angular/http";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	public focusList=[];  /*数组 轮播图*/
	public recList=[];
  public recListWidth='';
  constructor(public navCtrl: NavController,public config:ConfigProvider,public jsonp:Jsonp,public httpService:HttpServicesProvider) {
	    for(let i=0;i<10;i++){
	    	this.recList.push({
	    		pic:'assets/imgs/0'+i+'.jpg',
	    		title:'第'+i+'条'
	    	});
	    this.recListWidth=this.recList.length*92+'px';
    }
	  console.log(this.config.apiUrl);
	  this.getFocus();
  }
   //轮播图
  getFocus(){ 
    var that=this;
    
    this.httpService.requestData('api/focus',function(data){
       console.log(data);
        that.focusList=data.result;
    })
  }
}
