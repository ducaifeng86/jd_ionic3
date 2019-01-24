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
	public bestList=[];   /*精品推荐*/
  public bestListWidth=''; /*精品推荐数据长度*/
 	public hotList = [];//热门商品
  constructor(public navCtrl: NavController,public config:ConfigProvider,public jsonp:Jsonp,public httpService:HttpServicesProvider) {
	  this.getFocus();//轮播图
    this.getBestProduct();//调用精品推荐
    this.getHotProduct();//热门产品
  }
   
  getFocus(){ 
    var that=this;
    this.httpService.requestData('api/focus',function(data){
        that.focusList=data.result;
    })
  }
  
  getBestProduct(){
    this.httpService.requestData('api/plist?is_best=1',(data)=>{
        this.bestList=data.result;
        this.bestListWidth=this.bestList.length*92+'px'; 
    })
  }
  
  getHotProduct(){
  	this.httpService.requestData('api/plist?is_best=1',(data)=>{
  		this.hotList = data.result;
  	});
  }
}
