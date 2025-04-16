import { BarChart2, DollarSign, Settings, ShoppingBag, ShoppingCart, TrendingUp, User } from "lucide-react";

  export const SIDEBAR_ITEMS=[
        {name:"Overview",
            icon:BarChart2,
            color:'#FFFFFF',
            path:'/'
        },
        {name:"Products",
            icon:ShoppingBag,
            color:'#FFFFFF',
            path:'/products'
        },
        {name:"Users",
            icon:User,
            color:'#FFFFFF',
            path:'/users'
        },
        {name:"Sales",
            icon:DollarSign,
            color:'#FFFFFF',
            path:'/sales'
        },
        {name:"Orders",
            icon:ShoppingCart,
            color:'#FFFFFF',
            path:'/orders'
        },
        {name:"Analytics",
            icon:TrendingUp,
            color:'#FFFFFF',
            path:'/analytics'
        },
        // {name:"Settings",
        //     icon:Settings,
        //     color:'#FFFFFF',
        //     path:'/settings'
        // },
    ]
    export const salesData = [
        { name: "Jul", sales: 4200 },
        { name: "Aug", sales: 3800 },
        { name: "Sep", sales: 5100 },
        { name: "Oct", sales: 4600 },
        { name: "Nov", sales: 5400 },
        { name: "Dec", sales: 7200 },
        { name: "Jan", sales: 6100 },
        { name: "Feb", sales: 5900 },
        { name: "Mar", sales: 6800 },
        { name: "Apr", sales: 6300 },
        { name: "May", sales: 7100 },
        { name: "Jun", sales: 7500 },
    ];
    export const categoryData = [
        { name: "Electronics", value: 4500 },
        { name: "Clothing", value: 3200 },
        { name: "Home & Garden", value: 2800 },
        { name: "Books", value: 2100 },
        { name: "Sports & Outdoors", value: 1900 },
    ];
    export const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];

    export const SALES_CHANNEL_DATA = [
        { name: "Website", value: 45600 },
        { name: "Mobile App", value: 38200 },
        { name: "Marketplace", value: 29800 },
        { name: "Social Media", value: 18700 },
        { name: "Retail Stores", value: 25000 },
        { name: "Email Campaigns", value: 15000 },
        { name: "Affiliates", value: 12000 },
        { name: "Phone Sales", value: 8000 },
    ];
    export const PRODUCT_DATA = [
        { id: 1, name: "Wireless Earbuds", category: "Electronics", price: 59.99, stock: 143, sales: 1200 },
        { id: 2, name: "Leather Wallet", category: "Accessories", price: 39.99, stock: 89, sales: 800 },
        { id: 3, name: "Smart Watch", category: "Electronics", price: 199.99, stock: 56, sales: 650 },
        { id: 4, name: "Yoga Mat", category: "Fitness", price: 29.99, stock: 210, sales: 950 },
        { id: 5, name: "Coffee Maker", category: "Home", price: 79.99, stock: 78, sales: 720 },
    ];
    export  const userData = [
        { id: 1, name: "John Doe", email: "john@gmail.com", role: "Customer", status: "Active" },
        { id: 2, name: "Jane Smith", email: "jane@gmail.com", role: "Admin", status: "Active" },
        { id: 3, name: "Bob Johnson", email: "bob@gmail.com", role: "Customer", status: "Inactive" },
        { id: 4, name: "Alice Brown", email: "alice@gmail.com", role: "Customer", status: "Active" },
        { id: 5, name: "Charlie Wilson", email: "charlie@gmail.com", role: "Moderator", status: "Active" },
    ];
    export  const userGrowthData = [
        { month: "Jan", users: 1000 },
        { month: "Feb", users: 1500 },
        { month: "Mar", users: 2000 },
        { month: "Apr", users: 3000 },
        { month: "May", users: 4000 },
        { month: "Jun", users: 5000 },
    ];
    export const userActivityData = [
        { name: "Mon", "0-4": 20, "4-8": 40, "8-12": 60, "12-16": 80, "16-20": 100, "20-24": 30 },
        { name: "Tue", "0-4": 30, "4-8": 50, "8-12": 70, "12-16": 90, "16-20": 110, "20-24": 40 },
        { name: "Wed", "0-4": 40, "4-8": 60, "8-12": 80, "12-16": 100, "16-20": 120, "20-24": 50 },
        { name: "Thu", "0-4": 50, "4-8": 70, "8-12": 90, "12-16": 110, "16-20": 130, "20-24": 60 },
        { name: "Fri", "0-4": 60, "4-8": 80, "8-12": 100, "12-16": 120, "16-20": 140, "20-24": 70 },
        { name: "Sat", "0-4": 70, "4-8": 90, "8-12": 110, "12-16": 130, "16-20": 150, "20-24": 80 },
        { name: "Sun", "0-4": 80, "4-8": 100, "8-12": 120, "12-16": 140, "16-20": 160, "20-24": 90 },
    ];
    export const userDemographicsData = [
        { name: "18-24", value: 20 },
        { name: "25-34", value: 30 },
        { name: "35-44", value: 25 },
        { name: "45-54", value: 15 },
        { name: "55+", value: 10 },
    ];
    
    