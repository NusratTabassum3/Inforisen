// আপনার ইমেজের ফাইল নেম অনুযায়ী ইমপোর্ট করুন
import orderIcon from "../assets/images/stats/order.png";
import rankIcon from "../assets/images/stats/rank.png";
import serviceIcon from "../assets/images/stats/service.png";
import userIcon from "../assets/images/stats/user.png";

export const statsData = [
  {
    id: 1,
    icon: orderIcon,
    value: "321,879",
    label: "Order Processed",
  },
  {
    id: 2,
    icon: serviceIcon,
    value: "6,245",
    label: "Available Services",
  },
  {
    id: 3,
    icon: userIcon,
    value: "8,552",
    label: "Registered User",
  },
  {
    id: 4,
    icon: rankIcon,
    value: "#1",
    label: "Regional Rank",
  },
];
