[1mdiff --git a/src/components/Lotes.jsx b/src/components/Lotes.jsx[m
[1mindex 473446c..f6a27de 100644[m
[1m--- a/src/components/Lotes.jsx[m
[1m+++ b/src/components/Lotes.jsx[m
[36m@@ -1,40 +1,67 @@[m
[31m-import { RiShareLine } from "react-icons/ri";[m
[32m+[m[32mimport { RiShareLine, RiCheckboxBlankCircleFill } from "react-icons/ri";[m
 [m
 const Lotes = () => {[m
     return ([m
         <>[m
             {/* Seccion de lotes */}[m
[31m-            <section className="px-12 mt-10 h-[710px]">[m
[32m+[m[32m            <section className="mt-10 h-[710px] overflow-x-hidden">[m
                 {/* Titulo */}[m
[31m-                <div className="flex justify-between">[m
[32m+[m[32m                <div className="flex justify-between px-16">[m
                     <h2 className="font-bold text-4xl text-cafranGray-semiDark">[m
                         Lotes[m
                     </h2>[m
[31m-                    <div className="border-solid border-r-2 border-cafranGray-semilight"></div>[m
[32m+[m[32m                    <div className="border-solid border-r-2 border-cafranGray-semilight/50"></div>[m
                     <p className="w-[135px] text-cafranGray-dark text-[13px] leading-4">[m
                         Encontrá el lugar ideal para tu vivienda permanente o de[m
                         fin de semana.[m
                     </p>[m
                 </div>[m
                 {/* Separador */}[m
[31m-                <img src="" alt="" />[m
[32m+[m[32m                <div className="mt-6 w-full h-[400px] relative -z-10">[m
[32m+[m[32m                    {/* Foto carousel */}[m
[32m+[m[32m                    <div className="absolute right-0">[m
[32m+[m[32m                        <img[m
[32m+[m[32m                            src="https://images.pexels.com/photos/2121120/pexels-photo-2121120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"[m
[32m+[m[32m                            alt="imagen del interior de una casa"[m
[32m+[m[32m                            className="w-[310px] h-[400px] object-cover"[m
[32m+[m[32m                        />[m
[32m+[m[32m                    </div>[m
[32m+[m[32m                    {/* Puntos de desplazamiento */}[m
[32m+[m[32m                    <div className="absolute bottom-[10px] right-12 flex gap-2 text-white text-[8px]">[m
[32m+[m[32m                        <RiCheckboxBlankCircleFill />[m
[32m+[m[32m                        <RiCheckboxBlankCircleFill />[m
[32m+[m[32m                        <RiCheckboxBlankCircleFill />[m
[32m+[m[32m                        <RiCheckboxBlankCircleFill />[m
[32m+[m[32m                    </div>[m
[32m+[m[32m                </div>[m
                 {/* Imagen de lote */}[m
[31m-                <div>[m
[31m-                    <h3>Barrio</h3>[m
[31m-                    <h2>La Candelaria</h2>[m
[31m-                    <h3>Ruta 193 Km 9,5</h3>[m
[31m-                    <p>[m
[32m+[m[32m                <div className="bg-white w-[246px] h-48 rounded-md -mt-14 static z-10 font-bold text-cafranGray-dark pt-4 pl-8">[m
[32m+[m[32m                    <h3 className="text-sm">BARRIO</h3>[m
[32m+[m[32m                    <h2 className="text-[28px] pb">La Candelaria</h2>[m
[32m+[m[32m                    <h3 className="text-sm pb-1">Ruta 193 Km 9,5</h3>[m
[32m+[m[32m                    <p className="font-normal w-[179px] text-[13px] pb-1">[m
                         Intersección Ant. Argentina A 9 min. del centro de[m
                         Zárate[m
                     </p>[m
                     <h3>Lotes desde 450mt2</h3>[m
                 </div>[m
                 {/* Botones de lote */}[m
[31m-                <div>[m
[31m-                    <button>Ver Plano</button>[m
[31m-                    <button>Más información</button>[m
[31m-                    <RiShareLine />[m
[32m+[m[32m                <div className="px-8 flex justify-between items-center -mt-3">[m
[32m+[m[32m                    <button[m
[32m+[m[32m                        type="button"[m
[32m+[m[32m                        className="text-cafranGray-dark bg-white border border-cafranGray-dark  font-normal rounded-md text-sm w-[103px] h-[43px] px-1 py-2.5 text-center hover:bg-cafranGray-dark hover:text-white"[m
[32m+[m[32m                    >[m
[32m+[m[32m                        Ver Plano[m
[32m+[m[32m                    </button>[m
[32m+[m[32m                    <button[m
[32m+[m[32m                        type="button"[m
[32m+[m[32m                        className="text-white border border-cafranMain-main bg-cafranMain-main font-normal rounded-md text-sm w-[157px] h-[43px] px-5 py-2.5 text-center hover:bg-cafranMain-main/80 hover:border-cafranMain-main/80"[m
[32m+[m[32m                    >[m
[32m+[m[32m                        Más información[m
[32m+[m[32m                    </button>[m
[32m+[m[32m                    <RiShareLine className="text-2xl text-cafranGray-dark" />[m
                 </div>[m
[32m+[m[32m                <div className="border-solid border-b-2 mt-6 border-cafranGray-semilight/50 mx-12"></div>[m
             </section>[m
         </>[m
     );[m
