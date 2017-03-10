import {Component, OnInit} from "@angular/core";
import {ItemsService, Distributor} from "../../../services/items.service";
import {Title} from "@angular/platform-browser";
import {TdDataTableColumn} from "../../td-data-table-column";
import {RESTService} from "@covalent/http";

@Component({
  selector: 'app-shortage',
  templateUrl: './shortage.component.html',
  styleUrls: ['./shortage.component.scss'],
  viewProviders: [ItemsService]
})
export class ShortageComponent implements OnInit {

  columns: TdDataTableColumn[] = [
    { name: 'id', label: 'ID', sortable: true },
    { name: 'name', label: 'Product Name', sortable: true, nested: true },
    { name: 'distributor.name', label: 'Distributor', sortable: false, nested: true },
    {name: 'retail_shop.name', label: 'Shop', sortable: false},
    {name: 'available_stock', label: 'Stock', numeric: true, sortable: false},
    {name: 'min_stock', label: 'Min.Qty', numeric: true, sortable: true},
  ];

  title: string;
  include: string[] = ['distributor'];
  filters: any = {__is_short__bool: true};

  constructor(private _titleService: Title,
              private _itemService: ItemsService) {
  }


  ngOnInit(): void {
    this._titleService.setTitle('Shortage');
    this.title = 'Shortage';

  }

  filter = (): RESTService<any> => {

    return this._itemService
  };

}
