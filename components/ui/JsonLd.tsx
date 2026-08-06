import React from "react";
import { SITE_DATA } from "@/constants/siteData";

export const JsonLd: React.FC = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": SITE_DATA.name,
    "image": SITE_DATA.ogImage,
    "url": SITE_DATA.siteUrl,
    "telephone": SITE_DATA.phoneRaw,
    "email": SITE_DATA.email,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Opposite DLTC ITI, Bondilipuram",
      "addressLocality": "Srikakulam",
      "addressRegion": "Andhra Pradesh",
      "postalCode": "532001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 18.2949,
      "longitude": 83.8938
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:30",
      "closes": "18:30"
    },
    "sameAs": [
      SITE_DATA.mapsUrl
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": SITE_DATA.name,
    "url": SITE_DATA.siteUrl,
    "logo": `${SITE_DATA.siteUrl}/logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": SITE_DATA.phoneRaw,
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Telugu"]
    }
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Industrial Consultancy",
    "provider": {
      "@type": "LocalBusiness",
      "name": SITE_DATA.name
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Srikakulam, Andhra Pradesh"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Industrial Consultancy Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Industrial Projects Consultancy"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Project Planning"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Documentation & Compliance Guidance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business & Industrial Advisory"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Project Execution Support"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
    </>
  );
};
