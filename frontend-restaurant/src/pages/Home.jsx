import { useNavigate } from 'react-router-dom';
import { GiKnifeFork } from 'react-icons/gi';
import { FaReceipt, FaWarehouse, FaUsers, FaMoneyBillWave } from 'react-icons/fa';
import { MdTableRestaurant, MdFastfood, MdPerson, MdAnalytics } from 'react-icons/md';

const roles = [
  {
    title: 'Admin',
    description: 'Manage users, inventory, and reports.',
    color: 'bg-blue-600',
    route: '/login?role=admin',
  },
  {
    title: 'Waiter',
    description: 'Place table orders (KOT/BOT) efficiently.',
    color: 'bg-green-600',
    route: '/login?role=waiter',
  },
  {
    title: 'Cashier',
    description: 'Handle billing and manage payments.',
    color: 'bg-yellow-500',
    route: '/login?role=cashier',
  },
  {
    title: 'Chef',
    description: 'Manage kitchen orders with speed.',
    color: 'bg-red-500',
    route: '/login?role=chef',
  },
];

const features = [
  { icon: <FaReceipt className="text-3xl text-indigo-600" />, title: 'E-Billing', desc: 'Generate fast and accurate bills.' },
  { icon: <MdFastfood className="text-3xl text-indigo-600" />, title: 'KOT / BOT', desc: 'Send orders directly to kitchen/bar.' },
  { icon: <FaWarehouse className="text-3xl text-indigo-600" />, title: 'Inventory Management', desc: 'Track stock levels and usage.' },
  { icon: <MdTableRestaurant className="text-3xl text-indigo-600" />, title: 'Table Reservation', desc: 'Reserve and manage tables.' },
  { icon: <MdAnalytics className="text-3xl text-indigo-600" />, title: 'Reports', desc: 'View income and expense reports.' },
  { icon: <FaMoneyBillWave className="text-3xl text-indigo-600" />, title: 'Menu Costing', desc: 'Calculate dish cost by ingredients.' },
  { icon: <FaUsers className="text-3xl text-indigo-600" />, title: 'Customer Management', desc: 'Track and manage customers.' },
  { icon: <MdPerson className="text-3xl text-indigo-600" />, title: 'User Roles', desc: 'Admin can manage all staff roles.' },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 shadow bg-white">
        <div className="flex items-center space-x-2">
          <GiKnifeFork className="text-3xl text-indigo-600" />
          <span className="text-xl font-bold">Restaurant Hub</span>
        </div>
        <div className="space-x-4 hidden md:flex items-center">
          <a href="#roles" className="text-gray-700 hover:text-indigo-600 font-medium">Roles</a>
          <a href="#features" className="text-gray-700 hover:text-indigo-600 font-medium">Features</a>
          <a href="#contact" className="text-gray-700 hover:text-indigo-600 font-medium">Contact</a>
          <button
            onClick={() => navigate('/register')}
            className="bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-700 transition"
          >
            Register
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center py-20 px-4 bg-gradient-to-r from-indigo-50 to-indigo-100">
        <h2 className="text-4xl md:text-5xl font-bold">Simplify Your Restaurant Operations</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Manage orders, staff, inventory, and finance in one streamlined RMS dashboard.
        </p>
        <button
          onClick={() => navigate('/register')}
          className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded font-medium hover:bg-indigo-700"
        >
          Get Started
        </button>
      </section>

      {/* Roles Section */}
      <section id="roles" className="py-20 px-6 bg-white">
        <h3 className="text-3xl font-semibold text-center mb-12">Select Your Role</h3>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {roles.map((role, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition flex flex-col justify-between"
            >
              <div>
                <h4 className="text-2xl font-bold">{role.title}</h4>
                <p className="text-gray-600 mt-2">{role.description}</p>
              </div>
              <button
                onClick={() => navigate(role.route)}
                className={`${role.color} text-white mt-6 py-2 rounded hover:opacity-90`}
              >
                Login as {role.title}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-gray-50">
        <h3 className="text-3xl font-bold text-center mb-12">Key Features</h3>
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {features.map((feat, i) => (
            <div key={i} className="bg-white p-6 rounded-xl text-center shadow hover:shadow-lg transition">
              <div className="mb-4 flex justify-center">{feat.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{feat.title}</h4>
              <p className="text-gray-600 text-sm">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-16 px-6 border-t">
        <div className="max-w-4xl mx-auto text-center">
          <h4 className="text-2xl font-bold mb-4">Get in Touch</h4>
          <p className="text-gray-600 mb-6">
            Have questions or need help setting up your restaurant RMS? We're here for you.
          </p>
          <p className="text-gray-700 font-medium">📧 support@restaurant-hub.com</p>
          <p className="text-gray-700 font-medium mt-2">📞 9815959527</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Restaurant Management System. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
