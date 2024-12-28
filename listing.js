function recommendProperties(properties, preferences) {
    return properties.filter(property => {
      return (
        property.location === preferences.location &&
        property.price <= preferences.maxPrice &&
        property.type === preferences.preferredType
      );
    });
  }
  