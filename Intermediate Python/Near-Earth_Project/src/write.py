"""Write a stream of close approaches to CSV or to JSON.

This module exports two functions: `write_to_csv` and `write_to_json`, each of
which accept an `results` stream of close approaches and a path to which to
write the data.

These functions are invoked by the main module with the output of the `limit`
function and the filename supplied by the user at the command line. The file's
extension determines which of these functions is used.

You'll edit this file in Part 4.
"""
import csv
import json


def write_to_csv(results, filename):
    """Write an iterable of `CloseApproach` objects to a CSV file.

    The precise output specification is in `README.md`. Roughly, each output row
    corresponds to the information in a single close approach from the `results`
    stream and its associated near-Earth object.

    :param results: An iterable of `CloseApproach` objects.
    :param filename: A Path-like object pointing to where the data should be saved.
    """
    fieldnames = (
        'datetime_utc', 'distance_au', 'velocity_km_s',
        'designation', 'name', 'diameter_km', 'potentially_hazardous'
    )
    with open(filename, 'w', newline='') as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        for result in results:
            data = {**result.serialize(), **result.neo.serialize()}
            data['name'] = data['name'] if data['name'] is not None else ""
            data['potentially_hazardous'] = "True" if data["potentially_hazardous"] else "False"
            writer.writerow(data)


def write_to_json(results, filename):
    """Write an iterable of `CloseApproach` objects to a JSON file.

    The precise output specification is in `README.md`. Roughly, the output is a
    list containing dictionaries, each mapping `CloseApproach` attributes to
    their values and the 'neo' key mapping to a dictionary of the associated
    NEO's attributes.

    :param results: An iterable of `CloseApproach` objects.
    :param filename: A Path-like object pointing to where the data should be saved.
    """
    json_data = []
    for result in results:
        data = {**result.serialize(), **result.neo.serialize()}
        data['name'] = data['name'] if data['name'] is not None else ''
        bool_true = 1
        bool_false = 0
        data['potentially_hazardous'] = bool(bool_true) if data['potentially_hazardous'] else bool(bool_false)
        json_data.append(
            {
                'datetime_utc': data['datetime_utc'],
                'distance_au': data['distance_au'],
                'velocity_km_s': data['velocity_km_s'],
                'neo': {
                    'designation': data['designation'],
                    'name': data['name'],
                    'diameter_km': data['diameter_km'],
                    'potentially_hazardous': data['potentially_hazardous'],
                },
            }
        )

    with open(filename, 'w') as jsonfile:
        json.dump(json_data, jsonfile, indent='\t')
