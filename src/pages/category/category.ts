import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConfigProvider } from '../../providers/config/config';
import { HttpServicesProvider } from '../../providers/http-services/http-services';
@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class CategoryPage {
	public leftCate = [];
	public rightList = [];
	public pid = '';
  constructor(public navCtrl: NavController,public config:ConfigProvider,public httpService:HttpServicesProvider) {
		this.getLeftData();//左侧分类数据
  }
	getLeftData(){
		let apiUrl = 'api/pcate';
		this.httpService.requestData(apiUrl,(data)=>{
			this.leftCate = data.result;
			this.getRightData(this.leftCate[0]['_id'])
		});
	}
	
	getRightData(pid){
		let apiUrl = 'api/pcate?pid='+pid;
		this.httpService.requestData(apiUrl,(data)=>{
			this.rightList = data.result;
			console.log(data.result);
		});
	}
	
}
