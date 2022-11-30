import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "../axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../styles/order.css";
import { clearItems } from "../redux/Slices/basketSlice";

const Order = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items } = useSelector((state) => state.basket);
  React.useEffect(() => {
    if (!items.length) {
      navigate("/");
    }
  }, []);
  const { handleSubmit, register, formState } = useForm({
    defaultValues: {
      email: "",
      fullName: "",
      tel: "",
      punct: "",
      area: "",
      rayon: "",
      address: "",
    },
    mode: "onChange",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const sendData = async (values) => {
    const fullAddress = `населений пункт: ${values.punct} | область: ${values.area} | район: ${values.rayon} | поточна адреса: ${values.address}`;
    const { data } = await axios.post("/orders", {
      fullName: values.fullName,
      email: values.email,
      tel: values.tel,
      address: fullAddress,
      orderedGoods: items,
    });
    if (data.message === "success") {
      navigate("/");
      dispatch(clearItems());
    } else {
      setErrorMessage(data.message);
    }
  };
  return (
    <div className="order">
      <div className="container">
        <form className="order-form" onSubmit={handleSubmit(sendData)}>
          <p>email: </p>
          <input
            type="email"
            className="order-form__email"
            {...register("email", { required: "Введіть свій email" })}
          />
          <span className="order-form__error">
            {formState.errors.email?.message}
          </span>
          <p>ПІП: </p>
          <input
            type="text"
            className="order-form__full-name"
            {...register("fullName", { required: "Введіть ПІП" })}
          />
          <span className="order-form__error">
            {formState.errors.fullName?.message}
          </span>
          <p>Номер телефону: </p>
          <input
            type="text"
            className="order-form__tel"
            {...register("tel", { required: "Введіть номер телефону" })}
          />
          <span className="order-form__error">
            {formState.errors.tel?.message}
          </span>
          <p>Населений пункт: </p>
          <input
            type="text"
            className="order-form__punct"
            {...register("punct", { required: "Введіть населений пункт" })}
          />
          <span className="order-form__error">
            {formState.errors.punct?.message}
          </span>
          <p>Область: </p>
          <input
            type="text"
            className="order-form__area"
            {...register("area", { required: "Введіть область" })}
          />
          <span className="order-form__error">
            {formState.errors.area?.message}
          </span>
          <p>Район: </p>
          <input
            type="text"
            className="order-form__rayon"
            {...register("rayon", { required: "Введіть район" })}
          />
          <span className="order-form__error">
            {formState.errors.rayon?.message}
          </span>
          <p>Адрес доставки: </p>
          <input
            type="text"
            className="order-form__address"
            {...register("address", {
              required: "Введіть адрес (вулицю, номер будинку тощо..)",
            })}
          />
          <span className="order-form__error">
            {formState.errors.address?.message}
          </span>
          <div className="order-form__submit">
            <input
              type="submit"
              className="order-form__submit-btn"
              value="Замовити"
            />
          </div>

          <div className="order-form__error-message">{errorMessage}</div>
        </form>
      </div>
    </div>
  );
};

export default Order;
