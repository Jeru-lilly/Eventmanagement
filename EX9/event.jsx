<Section id="packages" title="Event Packages">
  <p>Choose a package to continue to registration.</p>

  <div className="package-cards">
    {[
      ["Silver", "🎉", "Birthday Parties", "₹20,000", "Silver"],
      ["Gold", "💍", "Weddings", "₹75,000", "Gold"],
      ["Platinum", "🏢", "Corporate Events", "₹1,50,000", "Platinum"],
      ["Wedding Special", "💐", "Engagements", "₹75,000", "Gold"],
      ["Corporate Special", "🎤", "Meetings & Launches", "₹1,50,000", "Platinum"]
    ].map(([name, icon, suitable, price, pack]) => (
      <button
        className="package-card"
        type="button"
        key={name}
        onClick={() => {
          setForm(p => ({ ...p, pack }));
          setPackageNotice(name);
          document.getElementById("registration")?.scrollIntoView({
            behavior: "smooth"
          });
        }}
      >
        <span>{icon}</span>
        <strong>{name}</strong>
        <span>{suitable}</span>
        <strong>{price}</strong>
        <span>Choose Package →</span>
      </button>
    ))}
  </div>

  {packageNotice && (
    <div className="package-notice">
      <strong>You have chosen {packageNotice}!</strong>

      <button
        onClick={() => {
          setPackageNotice("");
          document.getElementById("registration-form")?.scrollIntoView({
            behavior: "smooth"
          });
        }}
      >
        Continue to Registration
      </button>

      <button onClick={() => setPackageNotice("")}>
        ×
      </button>
    </div>
  )}
</Section>
