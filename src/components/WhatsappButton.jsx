const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/573152638769" // Reemplaza con tu número
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all"
    >
      <svg
        className="w-7 h-7"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.52 3.48A11.89 11.89 0 0 0 2.6 19.43L1 23l3.7-1.3A11.88 11.88 0 0 0 12 24a12 12 0 0 0 8.49-20.52ZM12 22a9.93 9.93 0 0 1-5.1-1.4l-.36-.21-2.2.75.74-2.14-.24-.37a9.93 9.93 0 1 1 7.16 3.37Zm5.27-7.3-.73-.36c-.39-.2-.9-.43-1.38-.27l-.5.17a1.1 1.1 0 0 1-1.18-.3l-.57-.6a5.41 5.41 0 0 1-1.1-1.5c-.14-.28.08-.58.27-.79l.34-.35a.9.9 0 0 0 .22-.9 6.88 6.88 0 0 0-.81-1.74c-.2-.33-.58-.52-.96-.4A4.8 4.8 0 0 0 9.3 9.8c-.25.6-.3 1.29-.14 2 .29 1.23 1.15 2.38 2.01 3.27a8.12 8.12 0 0 0 3.57 2.09c.7.2 1.36.13 1.91-.1a4.8 4.8 0 0 0 1.47-1.03c.22-.27.11-.7-.14-.82Z" />
      </svg>
    </a>
  );
};

export default WhatsappButton;