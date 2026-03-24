const FIELD_MASK = 'places.id,places.displayName,places.userRatingCount,places.rating,places.formattedAddress,places.primaryTypeDisplayName,places.location';

async function searchOnePage(apiKey, body) {
  const res = await fetch('https://places.googleapis.com/v1/places:searchNearby', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': apiKey,
      'X-Goog-FieldMask': FIELD_MASK,
    },
    body: JSON.stringify(body),
  });
  return res.json();
}

export async function POST(request) {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    return Response.json({ error: 'API key not configured' }, { status: 500 });
  }

  try {
    const body = await request.json();
    const maxPages = body._maxPages || 1;
    delete body._maxPages;

    body.maxResultCount = 20;
    const data1 = await searchOnePage(apiKey, body);
    if (data1.error) {
      return Response.json(data1, { status: 400 });
    }

    let allPlaces = data1.places || [];
    let token = data1.nextPageToken;

    for (let page = 2; page <= maxPages && token; page++) {
      await new Promise(r => setTimeout(r, 2000));
      const bodyNext = { ...body, pageToken: token };
      delete bodyNext.locationRestriction;
      delete bodyNext.includedTypes;
      delete bodyNext.textQuery;
      const dataN = await searchOnePage(apiKey, bodyNext);
      if (dataN.error) break;
      allPlaces = allPlaces.concat(dataN.places || []);
      token = dataN.nextPageToken;
    }

    return Response.json({ places: allPlaces });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
