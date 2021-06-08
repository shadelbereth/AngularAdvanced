import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class ConfigService {
  private config: any = null;
  private env: any = null;

  constructor(private http: HttpClient) {

  }

  /**
   * Use to get the data found in the second file (config file)
   */
  public getConfig(key: string) {
    return this.config[key];
  }

  /**
   * Use to get the data found in the first file (env file)
   */
  public getEnv(key: string) {
    return this.env[key];
  }

  /**
   * This method:
   *   a) Loads "env.json" to get the current working environment (e.g.: 'production', 'development')
   *   b) Loads "config.[env].json" to get all env's variables (e.g.: 'config.development.json')
   */
  public load() {
    return new Promise((resolve, reject) => {
      this.http.get('env.json').subscribe((envResponse: any) => {
        this.env = envResponse;
        let request: any = null;

        switch (envResponse.env) {
          case 'production': {
            request = this.http.get('config.' + envResponse.env + '.json');
            break;
          }
          case 'development': {
            request = this.http.get('config.' + envResponse.env + '.json');
            break;
          }
          case 'default': {
            console.error('Environment file is not set or invalid');
            resolve(true);
            break;
          }
        }

        if (request) {
          request.subscribe((responseData: any) => {
            this.config = responseData;
            resolve(true);
          }, (error: any) => {
            console.error('Error reading ' + envResponse.env + ' configuration file');
            resolve(error);
          });
        } else {
          console.error('Env config file "env.json" is not valid');
          resolve(true);
        }
      }, (error: any): any => {
        console.log('Configuration file "env.json" could not be read');
        resolve(true);
      })
    });
  }
}
