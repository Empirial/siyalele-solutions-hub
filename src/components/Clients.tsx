const Clients = () => {
  const clients = [
    "Eskom",
    "2Seam Coal", 
    "Banele Mining",
    "Thaqin Holdings PTY LTD",
    "Child Welfare"
  ];

  return (
    <section className="py-12 bg-muted/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-heading text-3xl font-bold text-industrial mb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="text-muted-foreground">
            We're proud to work with these industry leaders
          </p>
        </div>
        
        {/* Scrolling Animation */}
        <div className="relative">
          <div className="flex animate-scroll space-x-12">
            {[...clients, ...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white rounded-xl px-8 py-6 shadow-card hover:shadow-elevated transition-all duration-smooth border border-gray-100 min-w-[200px] text-center group hover:-translate-y-1"
              >
                <h3 className="font-heading font-semibold text-industrial group-hover:text-primary transition-colors duration-smooth">
                  {client}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;