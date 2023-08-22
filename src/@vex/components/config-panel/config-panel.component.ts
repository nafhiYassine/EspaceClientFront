import { Component, Inject, OnInit } from '@angular/core';
import { ConfigService } from '../../config/config.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { map } from 'rxjs/operators';
import { LayoutService } from '../../services/layout.service';
import { MatRadioChange } from '@angular/material/radio';
import { VexConfigName } from '../../config/config-name.model';
import { ColorVariable, colorVariables } from './color-variables';
import { DOCUMENT } from '@angular/common';
import { ColorSchemeName } from '../../config/colorSchemeName';
import { Observable } from 'rxjs';
import { VexConfig } from '../../config/vex-config.interface';
import { CSSValue } from '../../interfaces/css-value.type';
import { isNil } from '../../utils/isNil';
import { defaultRoundedButtonBorderRadius } from '../../config/constants';
import { SECRET_KEY } from 'src/app/commons/url.constants';
import * as CryptoJS from 'crypto-js';


@Component({
  selector: 'vex-config-panel',
  templateUrl: './config-panel.component.html',
  styleUrls: ['./config-panel.component.scss']
})
export class ConfigPanelComponent {

  configs: VexConfig[] = this.configService.configs;
  colorVariables: Record<string, ColorVariable> = colorVariables;

  config$: Observable<VexConfig> = this.configService.config$;

  isRTL$: Observable<boolean> = this.config$.pipe(
    map(config => config.direction === 'rtl')
  );

  colorScheme$: Observable<ColorSchemeName> = this.config$.pipe(
    map(config => config.style.colorScheme)
  );

  borderRadius$: Observable<number> = this.config$.pipe(
    map(config => config.style.borderRadius.value)
  );

  ConfigName = VexConfigName;
  ColorSchemeName = ColorSchemeName;
  selectedColor = colorVariables.blue;

  rgbColor : string

  roundedCornerValues: CSSValue[] = [
    {
      value: 0,
      unit: 'rem'
    },
    {
      value: 0.25,
      unit: 'rem'
    },
    {
      value: 0.5,
      unit: 'rem'
    },
    {
      value: 0.75,
      unit: 'rem'
    },
    {
      value: 1,
      unit: 'rem'
    },
    {
      value: 1.25,
      unit: 'rem'
    },
    {
      value: 1.5,
      unit: 'rem'
    },
    {
      value: 1.75,
      unit: 'rem'
    }
  ];

  roundedButtonValue: CSSValue = defaultRoundedButtonBorderRadius;
  ngOnInit() {
    let configs: VexConfig[] = this.configService.configs;

    if (localStorage.getItem('webconf')) {
      const serializedWebConf: string = localStorage.getItem('webconf');
      const decryptedBytes = CryptoJS.AES.decrypt(serializedWebConf, SECRET_KEY);
      const decryptedWebConf = decryptedBytes.toString(CryptoJS.enc.Utf8);
      this.rgbColor = this.hexToRgb(JSON.parse(decryptedWebConf).color);
      console.log("this.rgbColor : " + this.rgbColor)
    }

    configs[0].style.colors.primary = {
      default: this.rgbColor,
      contrast: 'rgb(255, 255, 255)'
    }
    this.setConfig(VexConfigName.ikaros, ColorSchemeName.light)
  }
  constructor(private configService: ConfigService,
    private layoutService: LayoutService,
    @Inject(DOCUMENT) private document: Document) { }
  
  setConfig(layout: VexConfigName, colorScheme: ColorSchemeName): void {
    this.configService.setConfig(layout);
    this.configService.updateConfig({
      style: {
        colorScheme
      }
    });
  }

  selectColor(color: ColorVariable): void {
    this.selectedColor = color;
    this.configService.updateConfig({
      style: {
        colors: {
          primary: {
            default: color.default,
            contrast: color.contrast
          }
        }
      }
    });
  }
  
  hexToRgb(hex: string): string {
    // Remove the '#' character if present
    hex = hex.replace('#', '');

    // Parse the hex values for red, green, and blue components
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    // Create the "rgb(X, Y, Z)" string
    return `rgb(${r}, ${g}, ${b})`;
  }

  isSelectedColor(color: ColorVariable): boolean {
    return color === this.selectedColor;
  }

  enableDarkMode(): void {
    this.configService.updateConfig({
      style: {
        colorScheme: ColorSchemeName.dark
      }
    });
  }

  disableDarkMode(): void {
    this.configService.updateConfig({
      style: {
        colorScheme: ColorSchemeName.default
      }
    });
  }

  layoutRTLChange(change: MatSlideToggleChange): void {
    this.configService.updateConfig({
      direction: change.checked ? 'rtl' : 'ltr'
    });
  }

  toolbarPositionChange(change: MatRadioChange): void {
    this.configService.updateConfig({
      toolbar: {
        fixed: change.value === 'fixed'
      }
    });
  }

  footerVisibleChange(change: MatSlideToggleChange): void {
    this.configService.updateConfig({
      footer: {
        visible: change.checked
      }
    });
  }

  footerPositionChange(change: MatRadioChange): void {
    this.configService.updateConfig({
      footer: {
        fixed: change.value === 'fixed'
      }
    });
  }

  isSelectedBorderRadius(borderRadius: CSSValue, config: VexConfig): boolean {
    return borderRadius.value === config.style.borderRadius.value && borderRadius.unit === config.style.borderRadius.unit;
  }

  selectBorderRadius(borderRadius: CSSValue): void {
    this.configService.updateConfig({
      style: {
        borderRadius: borderRadius
      }
    });
  }

  isSelectedButtonStyle(buttonStyle: CSSValue | undefined, config: VexConfig): boolean {
    if (isNil(config.style.button.borderRadius) && isNil(buttonStyle)) {
      return true;
    }

    return buttonStyle?.value === config.style.button.borderRadius?.value;
  }

  selectButtonStyle(borderRadius: CSSValue | undefined): void {
    this.configService.updateConfig({
      style: {
        button: {
          borderRadius: borderRadius
        }
      }
    });
  }

  isDark(colorScheme: ColorSchemeName): boolean {
    return colorScheme === ColorSchemeName.dark;
  }
}
