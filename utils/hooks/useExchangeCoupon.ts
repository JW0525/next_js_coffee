const ExchangeCoupon = async (
  email: string,
): Promise<any> => {
  const response = await fetch("/api/user/coupon", {
    method: "POST",
    body: JSON.stringify({ email }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }

  return data;
}

export default ExchangeCoupon;