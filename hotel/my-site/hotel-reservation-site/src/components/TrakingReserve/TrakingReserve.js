import React, { useState } from "react";
import Error from "../Error/Error";
import Warning from "../Warning/Warning";
import TopMenu from "../TopMenu/TopMenu";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Space from "../Space/Space";
import "../../styles/main.scss";
import Input from "../Input/Input";
import {
  useGetReservedInfoByIdQuery,
  useGetReservedInfoQuery,
  useDeleteReservedRoomMutation
} from "../redux/services/reservedInfoApi";

const TrakingReserve = () => {
  const [id, setId] = useState("");
  const[reservedrooms,setReservedRooms]=useState()
  const handleInputChange = (event) => {
    setId(event.target.value);
  };
  const { data: fetchedData, error, isLoading } = useGetReservedInfoQuery();
  const [deleteReservedRoom, { isLoading: isDeleting}] =useDeleteReservedRoomMutation();
  const handleDeleteReservedRoomClick= async (id)=>{
    await deleteReservedRoom(id);

  }
  return (
    <div>
      <TopMenu />
      <Header />
      <Space />
      <Space />
      <Space />
      <Space />
      <div className="container-custom box-shadow p-15 tracking-reserve">
        <Space />
        <Space />
        <label for="mobile">شماره موبایل : </label>
        <Input
          type="text"
          handleInputChange={handleInputChange}
          placeholder="شماره موبایل خود را وارد نمایید"
          id="mobile"
        />
        <Space />
        <Space />

        {error ? (
          <Error>احتمالا خطایی رخ داده است</Error>
        ) : isLoading ? (
          <Warning>در حال واکشی اطلاعات</Warning>
        ) : fetchedData ? (
          <div className="tracking-reserve__table">
            <table>
              <thead>
                <tr>
                  <th>نام و نام خانودگی مشتری</th>
                  <th>کد ملی</th>
                  <th>شماره موبایل</th>
                  <th>آدرس ایمیل</th>
                  <th>نحوه پرداخت</th>
                 
                </tr>
              </thead>
              <tbody>
                {fetchedData.map(
                  (currentItem) => id === currentItem.id  && (
                        <>
                      <tr key={currentItem.id}>
                        <td>
                          {currentItem.customerName}
                          {currentItem.customerFamily}
                        </td>
                        <td>{currentItem.customerNationalCode}</td>
                        <td>{currentItem.customerMobile}</td>
                        <td>{currentItem.customerEmail}</td>
                        <td>
                          {currentItem.paymentType === "cash"
                            ? "پرداخت حضوری"
                            : currentItem.paymentType === "online"
                            ? "پرداخت آنلاین"
                            : "پرداخت با کارت های سازمانی"}
                        </td>
                        </tr>
                        
                          {currentItem.selectedRooms.map((room) => 
                        <tr key={room.id}>
                            
                            <td colSpan={5}>
                              
                             
                                <h4>{room.title}</h4>                   
                                <p><span> قیمت هر شب :</span> {room.price} <span>ریال</span></p>                        
                                <p><span>تعداد بزرگسال :</span>{room.adultCount}</p>
                                <p><span>ظرفیت :</span>{room.capacity}</p>
                                <p><span>تاریخ ورود:</span>{room.jalaliStartDate}</p>
                                <p><span>تاریخ خروج :</span>{room.jalaliEndDate}</p>
                                <p><span>مدت اقامت :</span>{room.diffSatrtEnd}<span>شب</span></p>
                                <p><span>مجموع : </span>{room.totalAmount}<span>ریال</span></p>
                            
                            </td>
                        </tr>
                          )}
                        </>
   
                     

                    )
  
                )}
              </tbody>
            </table>
          </div>
        ) : (
          <Error>مشتری با شماره موبایل وارد شده وجود ندارد</Error>
        )}
      </div>
      <Space />
      <Footer />
    </div>
  );
};

export default TrakingReserve;
