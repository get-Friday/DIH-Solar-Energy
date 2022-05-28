import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import IGeneratedEnergy from 'src/app/models/generated-energy.model';
import { GenerationsService } from 'src/app/services/generations.service';

@Component({
  selector: 'DIH-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  currentDate = new Date();
  months: string[] = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  isReady: boolean = false;
  chartConfig: any = {
    data: {
      datasets: [
        {
          label: `Energia em ${this.currentDate.getFullYear()}`,
          data: [],
          fill: false,
          borderColor: '#2196F3',
          pointBorderColor: 'black',
          tension: 0.4,
        },
      ],
      labels: this.months,
    }
  };
  chartOptions: ChartConfiguration['options'] = {
    plugins: {
      title: {
        display: true,
        text: 'Total de energia gerada por mês',
        fullSize: true,
        align: 'start',
        font: {
          weight: '800',
          size: 20
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            size: 16
          }
        }
      },
      y: {
        position: 'right',
        min: 0,
        ticks: {
          stepSize: 100,
          font: {
            size: 16
          }
        }
      }
    }
  }

  constructor(private generationsService: GenerationsService) {}

  ngOnInit(): void {
    this.generationsService.getEnergy().subscribe((energy) => {
      this.setXAxisRange();
      this.chartConfig.data.datasets[0].data = this.setData(energy);
      this.isReady = true;
    });
  }

  setData(data: IGeneratedEnergy[]): number[] {
    const currentMonth = this.currentDate.getMonth();
    const currentYear = this.currentDate.getFullYear();
    const totalKw = [];

    for (let i = 1; i <= currentMonth + 1; i++) {
      let monthTemplate = ``;
      i < 10 ? (monthTemplate = `0${i}`) : (monthTemplate = `${i}`);

      const sameMonthData = data.filter(
        (e) => e.date == `${currentYear}-${monthTemplate}`
      );
      const totalKwMonth = sameMonthData.reduce((p, c) => p + c.totalKw, 0);
      totalKw.push(totalKwMonth);
    }

    return totalKw;
  }

  setXAxisRange() {
    const currentMonth = this.currentDate.getMonth();
    this.chartConfig.data.labels = this.months.slice(0, currentMonth + 1);
  }
}
