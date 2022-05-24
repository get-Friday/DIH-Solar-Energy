import { Component, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import IEnergy from 'src/app/models/energy.model';
import { EnergyService } from 'src/app/services/energy.service';

@Component({
  selector: 'DIH-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  currentDate = new Date();
  month: string[] = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  isReady: boolean = false;
  chartConfig = {
    data: {
      datasets: [{
        label: `Energia em ${this.currentDate.getFullYear()}`,
        data: [],
        fill: false,
        borderColor: '#2196F3',
        pointBorderColor: 'black',
        tension: 0.4
      }],
      labels: this.month
    }
  }

  constructor(private energyService: EnergyService) { }

  ngOnInit(): void {
    this.energyService.getEnergy().subscribe((energy) => {
      const entries: IEnergy[] = energy;
      this.setXAxisRange()
      this.chartConfig.data.datasets[0].data = this.setData(entries);
      this.isReady = true;
    })
  }

  setData(data: IEnergy[]): number[] {
    const currentMonth = this.currentDate.getMonth();
    const currentYear = this.currentDate.getFullYear();
    const totalKw = []

    for(let i = 1; i <= currentMonth + 1 ; i++){
      let monthTemplate = ``
      i < 10 ? monthTemplate = `0${i}` : monthTemplate = `${i}`

      const sameMonthData = data.filter(e => e.date == `${currentYear}-${monthTemplate}`)
      const totalKwMonth = sameMonthData.reduce((p, c) =>
        p + c.totalKw,
        0
      )
      totalKw.push(totalKwMonth)
    }

    return totalKw;
  }

  setXAxisRange() {
    const currentMonth = this.currentDate.getMonth();
    this.chartConfig.data.labels = this.month.slice(0, currentMonth + 1);
  }
}
