import React from "react" 
 
  export default function Devices() {  
  return ( 
 <> 
 {/*<!-- Component: Underline Table --> */}
<div className="w-full overflow-x-auto flex justify-center p-16">
  <table className="w-[1140px] text-left border-collapse rounded w-overflow-x-auto " cellspacing="0">
    <tbody>
      <tr className="border-b border-slate-300">
        <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">DeviceID</th>
        <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Email ID</th>
        <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Status</th>
      </tr>
      <tr className="border-b border-slate-200">
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">123</td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">yash@mail.com</td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">lock</td>
      </tr>
      <tr className="border-b border-slate-200">
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">456</td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">yas@gmail.com</td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">unlock</td>
      </tr>
    </tbody>
  </table>
</div>
{/*<!-- End Underline Table --> */}
 
 </> 
) 
 }