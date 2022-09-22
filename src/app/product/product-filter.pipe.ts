import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productFilter',
})
export class ProductFilterPipe implements PipeTransform {
  transform(value: Product[], filterText: string): Product[] {
    if (!filterText) {
      return value;
    } else {
      return value.filter(
        (val) =>
          val.name.toLocaleLowerCase().indexOf(filterText) !== -1 ||
          val.description.toLocaleLowerCase().indexOf(filterText) !== -1 ||
          val.imageUrl.toLocaleLowerCase().indexOf(filterText) !== -1
      );
    }

    // let x = filterText?value.filter((p:Product)=>p.name.toLocaleLowerCase().indexOf(filterText)!==-1):value;
    // let y = filterText?value.filter((p:Product)=>p.description.toLocaleLowerCase().indexOf(filterText)!==-1):value;
    // let z = x.concat(y)

    //name , description
    // let pattern = filterText?filterText.toLocaleLowerCase():null

    // return filterText?value.filter((p:Product)=>p.name
    // .toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }
  /*
  her şeyi arıyor bu matchvalue kısmı
  // transform(value: Product[], filterText?: string): Product[] {
  //   if(!filterText) {
  //     return value;
  //   }
  //   return value.filter((data: any) => this.matchValue(data,filterText)); 
  // }

  // matchValue(data: { [x: string]: string; }, value: string | RegExp) {
  //   return Object.keys(data).map((key) => {
  //     return new RegExp(value, 'gi').test(data[key]);
  //   }).some(result => result);
  // }
  transform(value: any[], filterText: string): any[] {
    if (filterText==="") {
      return value;
    }else {
      let prodArr : string[] = [];
  
      for (let i = 0; i <= value.length; i++) {
        let prodName:string=value[i].name;
        if (prodName.startsWith(filterText)) {
          prodArr.push(value[i])
        }
      }
      return prodArr;
    }
  }

  // transform(value: Product[], name: string, description:string, categoryId:string): Product[] {
  //   if(!value) return [];
  //   if(!name) return value;
  //   if(!description) return value;
  //   if(!categoryId) return value;
    
  //   name=name.toLocaleLowerCase();
  //   return value.filter(item=>
  //     {
  //         item.name.toLocaleLowerCase().includes(name),
  //         item.description.toLocaleLowerCase().includes(description),
  //         item.categoryId.toString().toLocaleLowerCase().includes(categoryId)          
  //     });
  //   }
  */
}
