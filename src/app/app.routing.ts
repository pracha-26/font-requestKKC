import { Routes } from "@angular/router";
import { HomeComponent } from "./views/others/home/home.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
  {
    path: "home",
    component: HomeComponent
  },
  //ไฟล์ routing อีกอันที่จะให้ลิ้งไป
  { //แบบ Lazy Load จะโหลดเมื่อมีการกดเข้า path ช่วยทำให้ดปรแกรมเบาขึ้น
    path: "others",
    loadChildren: () => import("./views/others/others.module").then(m => m.OthersModule)
  }
]
